import ClipLoader from "react-spinners/ClipLoader";

const override2 = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({
  loading = true,
  color = "#4338ca",
  override = override2,
  size = 150,
}) => {
  return (
    <ClipLoader
      color={color}
      loading={loading}
      cssOverride={override}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Spinner;
