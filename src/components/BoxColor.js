function BoxColor({ r, g, b }) {
  const rgbColor = `rgb(${r}, ${g}, ${b})`;

  return (
    <div style={{ backgroundColor: rgbColor }}>
      rgb({r}, {g}, {b})
    </div>
  );
}

export default BoxColor;
