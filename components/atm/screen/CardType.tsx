import Image from "next/image";
import { cn } from "@/lib/utils";

const CARDS_TILES = [
  {
    id: 1,
    type: "star",
  },
  {
    id: 2,
    type: "pulse",
  },
  {
    id: 3,
    type: "mastercard-debit",
  },
  {
    id: 4,
    type: "mastercard-credit",
  },
  {
    id: 5,
    type: "plus",
  },
  {
    id: 6,
    type: "visa",
  },
];

interface ICardTypeProps {
  cardProvider: string | null;
}

export default function CardType({ cardProvider }: Readonly<ICardTypeProps>) {
  return (
    <div className="w-full col-start-2 h-4.5 relative">
      <Image
        className="w-full object-cover object-top h-4.5 px-2"
        src="/img/atm/creditcard_sprite.png"
        alt="credit card sprite"
        width={150}
        height={10}
      />
      <div className="grid grid-cols-6 absolute w-full h-4.5 top-0">
        {CARDS_TILES.map((card) => (
          <div
            key={card.id}
            className={cn(
              "w-full h-4.5",
              cardProvider &&
                cardProvider.toLowerCase() !== card.type.toLowerCase() &&
                "bg-[#F1F0E7]/70"
            )}
          />
        ))}
      </div>
    </div>
  );
}
