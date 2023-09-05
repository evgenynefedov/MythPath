export const TaleImage = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    style={{
      width: "100%",
      objectFit: "cover",
      flex: "1",
      maxHeight: "50vh", // ограничиваем высоту
    }}
  />
);
