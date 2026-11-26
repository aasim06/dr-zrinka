import { ComparisonColumns } from "./ComparisonColumns";

const yes = [
  "You already carry responsibility",
  "You want clarity, not motivation",
  "You value precision over positivity",
  "You are ready to be positioned differently",
];
const no = [
  "You want comfort coaching",
  "You want quick formulas instead of structural thinking",
  "You expect change without responsibility",
  "You’re looking for mindset and manifestation work",
];

export function WhoThisIsFor() {
  return (
    <ComparisonColumns
      surface="white"
      left={{ title: "This is for you if…", items: yes }}
      right={{ title: "This is not for you if…", items: no, negative: true }}
    />
  );
}
