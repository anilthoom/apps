from ursina import *
from ursina.prefabs.first_person_controller import FirstPersonController
screen = Ursina()
class Voxsel(Button):
    def __init__(self,position= (0,0,0)):
        super().__init__(parent = scene,position = position,model ='cube', origin_y = 0,texture="bluell"