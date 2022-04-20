import * as THREE from 'three'

//This is the set up for the camera, the scene and the renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
////////////////////////////////////////////////////////////////////////////////


//This is the initialization of everything
function init(){
    camera.position.set(0, 0, 5);  //This is where the camera is placed when the scene is rendered
    const cube = cubefunction();    //This is calling the cube function and storing the result as a constant that will be used as a cube in this function
    scene.add(cube);        //This adds the cube to the scene
    

    function animate() {        //This is used to animate the scene
        requestAnimationFrame(animate);

        //This is rotating the cube we created above
        cube.rotation.x += 0.01;        
        cube.rotation.y += 0.01;

        renderer.render(scene, camera); // This renders the scene
    };

    animate();
}
///////////////////////////////////////////////////////////////////////////////////////////////


//This function creates a cube
function cubefunction(){        
    const geometry = new THREE.BoxGeometry();   
    const material = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: false
    });
    const cube = new THREE.Mesh(geometry, material);
    return cube         //This returns a cube
}

////////////////////////////////////////////////////////////////////////////////

//Calls the function that initializes everything
init()