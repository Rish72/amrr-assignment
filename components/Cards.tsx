import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Item } from "@/db/data";
import Image from "next/image";

type Props = {
  item: Item;
};

const Cards = ({ item }: Props) => {
  return (
    <Card
      className="w-full text-white bg-black sm:w-[calc(50%-theme(gap.6)/2)] lg:w-[calc(33.33%-theme(gap.6)*2/3)] xl:w-[calc(25%-theme(gap.6)*3/4)]"
    >
      <CardHeader>
        <Image
          src={item.coverImage}
          alt={item.name}
          width={300}
          height={200}
          className="rounded-md object-cover"
        />
        <CardTitle>{item.name}</CardTitle>
      </CardHeader>
      <CardFooter>
        <Button>Description</Button>
      </CardFooter>
    </Card>
  );
};

export default Cards;
