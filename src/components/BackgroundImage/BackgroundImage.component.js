const BackgroundImage = ({ url }) => {
  const imgUrl = `url(${url})`;
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundImage: imgUrl,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default BackgroundImage;
