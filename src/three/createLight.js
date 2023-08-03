import createAmbientLight from "./light/ambitionLight";
import createDirectionalLight from "./light/directionalLight";
import createPointLight from "./light/pointLight";

export default function createLight() {
    createAmbientLight();
    createDirectionalLight();
    createPointLight();
}