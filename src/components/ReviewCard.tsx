import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function ReviewCard() {
  return (
    <div className="border flex flex-col gap-4 px-5 py-5 rounded-lg box-border mx-2 duration-300 hover:border-primary group cursor-pointer">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Avatar className="group-hover:animate-flip">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-lg">Lionel Messi</p>
          </div>
        </div>

        <div>
          <div className="mb-4 flex space-x-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 text-yellow-500 md:h-5 md:w-5 group-hover:animate-flip"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Separator className="w-[75%] group-hover:bg-primary duration-700" />
      </div>
      <div>
        <p className="font-medium text-base">Customers Review</p>
        <p className="mt-1">
          “Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          temporibus aspernatur numquam repellat soluta.”
        </p>
      </div>
    </div>
  );
}
