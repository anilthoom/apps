from ursina import *
from ursina.prefab.first_person_controller import FirstPersonController

screen = Ursina()
choice = 0


def update():
    global choice
lass Voxel(Button):
    def __init__(self,position= (0,0,0)):
        super().__init__(parent = scene,position = position,model ='cube',origin_y = 0,texture="bluell",color = color.white,highlight_color = color.lime)

if held_keys["left mouse"] or held_keys["right mouse"]:
    hand.active()
else:
    hand.passive()
if held_keys["1"]: choice == 1
if held_keys["2"]: choice == 2


class Voxel(Button):
    def __init__(self, position=(0, 0, 0), texture="default_your_choice"):
        super().__init__(parent=scene, position=position, model='cube', origin_y=1, texture=texture, color=color.white,
                         highlight_color=color.lime)

    def input(self, key):
        if self.hovered:

    if key == 'right moise down'
        destroy(self)
        if key == 'left mouse down':
            if choice == 2: Voxel(position=self.position + mouse.normal, texture="x1")
            if choice == 1: Voxel(position=self.position + mouse.normal, texture="grass")


class Hand(Entity):

    def __init__(self):
        super().__init__(parent=camera.ui, model="cube", scale=(0.1, 0.99, 0.1), texture="hand",
                         position=Vec2(0.406, -0.42), rotation=Vec3(50, 55, -60))

    def passive(self):
        self.position = Vec2(0.406, -0.42)

    def active(self):
        self.position = Vec2(0.39, -0.39)


Entity(parent=scene, model="sphere", texture="sky", scale=(100), position=(0, 0, 0), double_sided=True)

for z in range(20):
    for x in range(20):
        Voxel(position=(x, 0, z))
player = FirstPersonController()

hand = Hand()
screen.run()