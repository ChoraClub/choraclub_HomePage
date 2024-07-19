"use client";

import { useMediaQuery } from '@uidotdev/usehooks';
import { useState, useEffect } from 'react';


export function useClientMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);
  const clientMatches = useMediaQuery(query);

  useEffect(() => {
    setMatches(clientMatches);
  }, [clientMatches]);

  return matches;
}