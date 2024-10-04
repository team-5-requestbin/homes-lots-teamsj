import Image from "../assets/images/404.webp";

export const Error = () => {
  return (
    <div>
      <img src={Image} alt="Error image" />
      <button
        onClick={() => (window.location.href = "/")}
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Refresh Page
      </button>
    </div>
  );
};
