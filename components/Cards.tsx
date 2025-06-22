"use client";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Item } from "@/db/data";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";

type Props = {
  item: Item;
};

const Cards = ({ item }: Props) => {
  const validAdditionalImages = item.additionalImages?.filter(Boolean) || [];
  return (
    <Card className="w-full text-white bg-black sm:w-[calc(50%-theme(gap.6)/2)] lg:w-[calc(33.33%-theme(gap.6)*2/3)] xl:w-[calc(25%-theme(gap.6)*3/4)]">
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
        <Drawer>
          <DrawerTrigger>Description</DrawerTrigger>
          <DrawerContent>
            <div className="flex-grow p-4 overflow-y-auto items-center">
              <Image
                src={item.coverImage}
                alt={item.name}
                width={500}
                height={200}
                objectFit="cover"
              />
              <DrawerHeader>
                <DrawerHeader className="text-center p-4">
                  <DrawerTitle className="text-2xl font-bold text-gray-900">
                    {item.name}
                  </DrawerTitle>
                  <DrawerDescription className="text-gray-600 mt-1">
                    {item.type}
                  </DrawerDescription>
                </DrawerHeader>
              </DrawerHeader>
              <p className="text-gray-800 text-base leading-relaxed mb-6">
                {item.description}
              </p>
              {validAdditionalImages.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Additional Images
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {validAdditionalImages.map((imgSrc, index) => (
                      <div
                        key={index}
                        className="relative w-full aspect-video rounded-md overflow-hidden"
                      >
                        <Image
                          src={imgSrc}
                          alt={`${item.name} - additional image ${index + 1}`}
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-md"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <DrawerFooter className="flex flex-row justify-center items-center">
              <Button variant="destructive" className="cursor-pointer">Enquire</Button>
              <DrawerClose asChild>
                <Button variant="outline" className="cursor-pointer">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </CardFooter>
    </Card>
  );
};

export default Cards;
