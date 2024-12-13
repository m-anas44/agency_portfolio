import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import { sanityClient } from "@/lib/sanityClient";
import { getImageDimensions } from "@sanity/asset-utils";

const imageUrlBuilder = urlBuilder(sanityClient);

const RightSide = ({ services, slug }) => {
  const serviceData =
    services.find((service) => service.slug.current === slug.toLowerCase()) ||
    services[0];

  const SampleImageComponent = ({ value, isInline }) => {
    const { width, height } = getImageDimensions(value);
    const imageUrl = imageUrlBuilder
      .image(value)
      .width(isInline ? 100 : 800) // Adjust width for inline or block display
      .fit("max") // Fit the image
      .auto("format") // Auto-format the image
      .url();

    return (
      <img
        src={imageUrl}
        alt={value.alt || "Service Image"}
        loading="lazy"
        style={{
          display: isInline ? "inline-block" : "block",
          aspectRatio: width / height,
        }}
      />
    );
  };

  return (
    <section className="px-3 sm:px-4 md:px-3">
      {serviceData ? (
        <div className="flex flex-col mx-auto text-secondary">
          {/* Display Title */}
          <h2 className="mb-2 text-xl font-extrabold leading-7 sm:text-2xl md:text-3xl text-secondary sm:leading-8 md:leading-9">
            {serviceData.title}
          </h2>

          <div className="mb-6 text-sm sm:text-base">
            <PortableText
              value={serviceData?.detailedInfo}
              components={{
                types: {
                  image: SampleImageComponent,
                },
                listItem: {
                  bullet: ({ children }) => (
                    <li style={{ listStyleType: "disclosure-closed" }}>
                      {children}
                    </li>
                  ),

                  checkmarks: ({ children }) => <li>✅ {children}</li>,
                },
                marks: {
                  link: ({ children, value }) => (
                    <a
                      href={value.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      {children}
                    </a>
                  ),
                },
              }}
            />
          </div>
        </div>
      ) : (
        <h2 className="text-xl font-bold text-red-500">Page Not Found</h2>
      )}
    </section>
  );
};

export default RightSide;
