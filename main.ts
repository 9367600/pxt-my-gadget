player.onChat("run", function () {
    space.customLayerSphere(
    [GRASS, DIRT],
    pos(0, 100, 0),
    10,
    Axis.Y,
    false,
    ShapeOperation.Hollow
    )
})
