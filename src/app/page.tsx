"use client";

import styles from "./page.module.scss";
import useSWRMutation from "swr/mutation";
import { API_ROUTE_CONSTANTS } from "../constants/api-routes.contants";
import { fetcherPOST } from "../libs/fetcher";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { urlValidation } from "@/libs/validations";
import { addHttpPrefix } from "@/libs/utils/common-utils";
import {
  HeyloLogo,
  HeyloHref,
  HeyloInput,
  HeyloButton,
  HeyloLoader,
  HeyloSnackbar,
} from "@/components";
import { inria_sans } from "@/libs/fonts";

export default function Home() {
  const router = useRouter();
  const urlLink = useRef<HTMLInputElement>();
  const [hasCopied, setCopied] = useState(false);
  const [validationErrors, setValidationErrors] = useState(false);

  const {
    data,
    error,
    trigger,
    isMutating: isLoading,
  } = useSWRMutation(
    () =>
      urlLink?.current?.value ? API_ROUTE_CONSTANTS.CREATE_SHORT_LINK : null,
    fetcherPOST
  );

  const handleCreateLink = () => {
    try {
      const inputVal = addHttpPrefix(urlLink?.current?.value ?? "");
      urlValidation.parse(inputVal);
      trigger({ url:  inputVal});
      setValidationErrors(false);
    } catch (err) {
      setValidationErrors(true);
    }
  };

  const handleCopyText = () => {
    if (data?.slug) {
      setCopied(true);
      const url = `${process.env.NEXT_PUBLIC_APP_HOST_URL}${data.slug}`;
      void navigator.clipboard.writeText(url);
    }
  };

  const handleJoin = () => {
    void router.push("/register");
  };

  return (
    <>
      <main className={styles["container"]}>
        <div className={styles["header"]}>
          <HeyloLogo text="Heylo Link" />
          <HeyloHref
            fontSize="24px"
            href="/register"
            text="Register"
            target={"_self"}
          />
        </div>
        <div className={styles["main-content"]}>
          <h1 className={[styles["title"], inria_sans.className].join(" ")}>
            {" "}
            Short URLs and Landing pages{" "}
          </h1>
          <div className={styles["form-container"]}>
            <HeyloInput
              input={{
                placeholder: "URL to short | e.g: https://heylo.link",
                ref: urlLink,
              }}
            ></HeyloInput>

            <HeyloButton
              onClick={handleCreateLink}
              color="PRIMARY"
              label="GENERATE"
              height={"60px"}
            />
          </div>

          {isLoading && (
            <div className={styles["loading-indicator"]}>
              <HeyloLoader />
            </div>
          )}

          {data?.slug && !isLoading && (
            <div className={styles["terminal"]} onClick={handleCopyText}>
              <pre>{`${process.env.NEXT_PUBLIC_APP_HOST_URL}${data.slug}`}</pre>
            </div>
          )}

          {(error || validationErrors) && !isLoading && (
            <div className={styles["terminal"]}>
              <pre> Please enter a valid URL </pre>
            </div>
          )}

          <p className={[styles["sub-title"], inria_sans.className].join(" ")}>
            Want to create custom short URLs and personal landing page?
          </p>
          <div className={styles["action"]}>
            <HeyloButton
              width="248px"
              color="SECONDARY"
              label="Join now"
              height={"60px"}
              onClick={handleJoin}
            />
          </div>
        </div>
      </main>
      <HeyloSnackbar
        duration={5000}
        message="Short URL copied to clipboard!"
        isOpen={hasCopied}
        onClose={() => setCopied(false)}
      />
    </>
  );
}
