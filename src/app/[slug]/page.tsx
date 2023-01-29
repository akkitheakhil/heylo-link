'use client';

import { HeyloScreenLoader } from "@/components";
import { API_ROUTE_CONSTANTS } from "../../constants/api-routes.contants";
import useSWR from 'swr';
import { addHttpPrefix } from "@/libs/utils/common-utils";
import { fetcherGET } from "@/libs/fetcher";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  }
}

export default function Page({ params: { slug } }: PageProps) {
  const url = `${API_ROUTE_CONSTANTS.GET_SHORT_LINK}${slug}`;
  const { data, error } = useSWR(url, fetcherGET);

  if(data && data.url) {
    window.location.href = addHttpPrefix(data.url);
    return;
  }

  if(error) {
    return void notFound();
  }

  return (
    <HeyloScreenLoader></HeyloScreenLoader>
  );
}
