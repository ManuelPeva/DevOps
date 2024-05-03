
const Marca = () => {
    const marcas = [
        "https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo1.png",
        "https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo2.png",
        "https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo3.png",
        "https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo1.png",
        "https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo2.png",
        "https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo1.png",
        "https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo2.png",
        "https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo3.png",
        "https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo1.png",
        "https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo2.png",
        // Agrega más paths a logos de marcas según necesites
    ];

    return (
        <div className="marca-container">
            <div className="marca-slider">
                {marcas.map((logo, index) => (
                    <div className="marca-logo" key={index}>
                        <img src={logo} alt={`Marca ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marca;
