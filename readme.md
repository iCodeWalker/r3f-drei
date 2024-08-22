# R3F drei

## Orbital Controls

        The Orbital control with r3f-drei is set with enableDamping which makes the animation smoother and we don't have to update it, it updates itself on each frame.

## Transform Controls

        Transform control adds a gizmo that allows the user to transform (position, rotation or scale) the object.
        Wrap the <mesh> corresponding to the cube in <TransformControls>

        It creates two problems:
        1. The gizmo is at the center on the scene and not on the cube that makes moving the cube difficult.
        2. As we have orbital control also the scene gets rotated when we try to move cube.

        Solutions :
        1. The gizmo position:
            1. We can give the postion to the TransformControl, that previously we gave to mesh so it moves to the position of the cube.
            2. We will seperate the TransformControl and mesh, then re-associate them using a reference and an attribute
            3. It's a better solution as it separates the mesh from the controls and even if we remove or deactivate it will have no side effects on the scene. And even we have to move the postion attribute from TransformControl to the mesh

        2. OrbitControl conflict:
            The camera is moving when we move the gizmo.
            This case is already handled by ref, we can add "makeDefault" to the OrbitControls

        We can use the "mode" attribute to have different transform controls like, rotate, scale or translate.
        By deafult it is translate.

        TransformControls is mainly for developers at the time of development.

## PivotControls

        The alternative solution for transform control is PivotControl with different features that looks very good.

        The TransformControls have gizmo that good for developers but not for the end users.

        Wrap the orange sphere in PivotControls.

    1. Pivot control does not work as a group like for the TransformControl
    2. If we want it to be at the center of the sphere, we have to change it's position using the anchor attribute
        <PivotControls anchor={[0,0,0]}/>
    3. The anchor is realative to object and it is not the real unit of the scenes.

    4. It's visibility works like other objects and it will be hidden if it is behind any other object.

    5. To force it to render on the top of the scene, we can use it's depthTest attribute and set it to false.

    6. We can control the look of it like the thickness of the lines with "lineWidth", the color of the axes with "axisColors" or the size with the "scale".

    7. By default the PivotControls have the perspective. meaning it'll get smaller the further the camera is.

    8. It can be done right using "fixed" attribute, When using fixed attribute the "scale" attribute take the pixel value.

## HTML

    1. HTML adds a DOM element that will stick to our 3d object
    It helps us to attach HTML to our 3d, so it follows our 3d object

    2. We can add Html to a <mesh>, a <group> or anything that inherits from Object 3D.
    Ex : In a sphere.

    3.  We can offset the Html with the "position" attribute.

    4. We can add style and class to it to have it look good.

    5. Add a "wrapperClass" attribute to the Html to target it.

    6. We can center the pivot point using "center" attribute.

    7. By default there is no perspective for Html, We can simulate perspective with the "distanceFactor" attribute.

    8. We can hide the Html when objects are infront of it with the "occlude" attribute. To use occlude, we first need to have a reference of all the objects that can occlude the "label". By default it will be visible if any object.
    Provide array of the references to the "occlude" attribute.

## Text

    Generating 3d text geometry is quite complex and has limitation
    1. We can notice the polygons that makes the text 3d.
    2. Takes a lot of CPU resources.
    3. Some fonts does not look good.
    4. Dosen't support line breaks.
    5. A good alternative is to use SDF fonts.
    6. SDF stands for Signed Distance Field and is usually used in fragment shaders to draw shapes.
    7. For fonts it is more complex because the shape can't be calculated mathematically.

    Can change the font, using "font" attribute. The default is Roboto.
    We can provide our own material for the fonts.
    Text works like most of the objects in the scene and we can play with its position, rotation and scale.
    We can limit the width to see the line breaks with the "maxWidth" attribute.
    We can center the text using "textAlign" attribute.

## Float

    Float makes the object float like a ballon in the air.

## MeshReflectorMaterial

    "resolution" attribute to set the resolution of the reflection.
    "blur" attribute to make the reflection blur.
    "mirror" attribute to make reflection cleaner.
    "color" attribute to set color of material
