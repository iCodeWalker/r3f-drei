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
            1. We can give the postion to the TransformControl so it moves to the position of the cube.
            2. We will seperate the TransformControl and mesh, then re-associate them using a reference and an attribute

        2. OrbitControl conflict:
            The camera is moving when we move the gizmo.
            This case is already handled by ref, we can add "makeDefault" to the OrbitControls

        We can use the "mode" attribute to have different transform controls like, rotate, scale or translate.
        By deafult it is translate

## PivotControls

        The alternative solution for transform control is PivotControl with different features that looks very good.

        The TransformControls have gizmo that good for developers but not for the end users.

        Wrap the orange sphere in PivotControls.

        Pivot control does not work as a group like for the TransformControl
        If we want it to be at the center of the sphere, we have to change it's position using the anchor attribute
        <PivotControls anchor={[0,0,0]}/>
        The anchor is realative to object and it is not the real unit of the scenes.

        It's visibility works like other objects and it will be hidden if it is behind any other object.

        To force it to render on the top of the scene, we can use it's depthTest attribute and set it to false.

        We can control the look of it like the thickness of the lines with "lineWidth", the color of the axes with "axisColors" or the size with the "scale".

        By default the PivotControls have the perspective. meaning it'll get smaller the further the camera is.
        It can be done right using "fixed" attribute, When using fixed attribute the "scale" attribute take the pixel value.

## HTML

    HTML adds a DOM element that will stick to our 3d object
    It helps us to attach HTML to our 3d, so it follows our 3d object

    We can add Html to a <mesh>, a <group> or anything that inherits from Object 3D.
    Ex : In a sphere.

    We can offset the Html with the "position" attribute.

    We can add style and class to it to have it look good.

    Add a "wrapperClass" attribute to the Html to target it.
    We can center the pivot point using "center" attribute.
    We can simulate perspective with the "distanceFactor" attribute.

    We can hide the Html when objects are infront of it with the "occlude" attribute. To use occlude, we first need to have a reference of all the objects that can occlude the "label". By default it will be visible if any object.
    Provide array of the references to the "occlude" attribute.
