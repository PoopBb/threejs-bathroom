import createAmbientLight from "./light/ambitionLight";
import createDirectionalLight from "./light/directionalLight";
import createPointLight from "./light/pointLight";
import createSpotLight from "./light/spotLight";
import createHemiLight from "./light/hemisphereLight";

export default function createLight() {
    createAmbientLight();
    createDirectionalLight();
    createPointLight();
    createSpotLight();
    createHemiLight();
}