"use client";

import { useQueryClient } from "@tanstack/react-query";
import authKeys from "./auth-keys";

export default function useAccessToken() {
  const queryClient = useQueryClient();

  return {
    accessToken: queryClient.getQueryData<string | undefined>(
      authKeys.accessToken(),
    ),
  };
}
