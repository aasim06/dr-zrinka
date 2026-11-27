"use client";
import { ComparisonColumns } from "./ComparisonColumns";
import { getUiCopy } from "@/data/translations";
import { useLocale } from "@/components/providers/LocaleProvider";

export function WhoThisIsFor() {
  const { locale } = useLocale();
  const copy = getUiCopy(locale).home;

  return (
    <ComparisonColumns
      surface="white"
      left={{ title: copy.forYouTitle, items: [...copy.forYouItems] }}
      right={{ title: copy.notForYouTitle, items: [...copy.notForYouItems], negative: true }}
    />
  );
}
