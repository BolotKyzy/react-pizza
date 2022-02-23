import React from "react"
import ContentLoader from "react-content-loader"

const PizzaLoadingBlock = () => (
    <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="139" cy="138" r="140" />
        <rect x="2" y="295" rx="0" ry="0" width="280" height="24" />
        <rect x="0" y="333" rx="6" ry="6" width="280" height="77" />
        <rect x="3" y="425" rx="0" ry="0" width="90" height="30" />
        <rect x="127" y="417" rx="30" ry="30" width="151" height="44" />
    </ContentLoader>
)

export default PizzaLoadingBlock;

