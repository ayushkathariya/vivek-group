import Image from "next/image";

export default function GallerySection() {
  return (
    <section className="px-2 md:px-6 lg:px-12 xl:px-16 py-10 lg:py-12 border flex flex-col gap-10">
      <div>
        <h3 className="text-center font-bold text-3xl">
          We See the Big Picture
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
        <div>
          <Image
            src={`/img-07.jpg`}
            alt="photo"
            width={200}
            height={60}
            className="w-full cursor-pointer rounded-sm"
          />
        </div>
        <div>
          <Image
            src={`/img-07.jpg`}
            alt="photo"
            width={200}
            height={60}
            className="w-full cursor-pointer rounded-sm"
          />
        </div>
        <div>
          <Image
            src={`/img-07.jpg`}
            alt="photo"
            width={200}
            height={60}
            className="w-full cursor-pointer rounded-sm"
          />
        </div>
        <div>
          <Image
            src={`/img-07.jpg`}
            alt="photo"
            width={200}
            height={60}
            className="w-full cursor-pointer rounded-sm"
          />
        </div>
        <div>
          <Image
            src={`/img-07.jpg`}
            alt="photo"
            width={200}
            height={60}
            className="w-full cursor-pointer rounded-sm"
          />
        </div>
        <div>
          <Image
            src={`/img-07.jpg`}
            alt="photo"
            width={200}
            height={60}
            className="w-full cursor-pointer rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}
