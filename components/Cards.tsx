import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Item } from "@/db/data";
// import Image from "next/image";
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
import Image from "next/image";
import { Delete, Mail } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type Props = {
  item: Item;
};

const Cards = ({ item }: Props) => {

  const router = useRouter()

  const validAdditionalImages = item.additionalImages?.filter(Boolean) || [];
  const handleDelete = async () => {
    try {
    await axios.delete(`/api/delete-item/${item._id}`);
    toast.success("Item deleted successfully!");
    router.refresh(); 
  } catch (error) {
    console.error("Failed to delete item:", error);
    toast.error("Failed to delete item");
  }
  };

  return (
    <Card className="w-full text-white bg-black sm:w-[calc(50%-theme(gap.6)/2)] lg:w-[calc(33.33%-theme(gap.6)*2/3)] xl:w-[calc(25%-theme(gap.6)*3/4)]">
      <CardHeader>
        <Image src={item.coverImage} alt={item.name} width={500} height={200} />
        <CardTitle>{item.name}</CardTitle>
      </CardHeader>
      <CardFooter>
        <Drawer>
          <DrawerTrigger className="cursor-pointer border-1 p-2 rounded">
            Description
          </DrawerTrigger>
          <DrawerContent>
            <div className="flex-grow p-4 overflow-y-auto justify-center items-center">
              <Image
                src={item.coverImage}
                alt={item.name}
                width={500}
                height={200}
              />
              <DrawerHeader>
                <DrawerHeader className="text-white text-center p-4">
                  <DrawerTitle className="text-2xl font-bold text-white">
                    {item.name}
                  </DrawerTitle>
                  <DrawerDescription className="text-gray-300 mt-1">
                    {item.type}
                  </DrawerDescription>
                </DrawerHeader>
              </DrawerHeader>
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                {item.description}
              </p>
              {validAdditionalImages.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-400 mb-3">
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
                          height={250}
                          width={450}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <DrawerFooter className="flex flex-row justify-center items-center">
              <a
                href={`mailto:support@example.com?subject=Product Enquiry: ${item.name}&body=Hi, I'm interested in "${item.name}". Please send me more details.`}
              >
                <Button className="cursor-pointer bg-white text-black">
                  <Mail />
                  Enquire
                </Button>
              </a>
              <DrawerClose asChild>
                <Button variant="outline" className="cursor-pointer text-white">
                  Cancel
                </Button>
              </DrawerClose>
              <Button
                className="cursor-pointer"
                variant="destructive"
                onClick={handleDelete }
              >
                <Delete />
                Delete
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </CardFooter>
    </Card>
  );
};

export default Cards;
