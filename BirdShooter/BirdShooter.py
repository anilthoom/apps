import pygame
from pygame import mixer
import math

pygame.init()

screen = pygame.display.set_mode((800, 600))
backgroundImage = pygame.image.load("images/background.jpg")

# Dove right to left image
doveR2LImage = pygame.image.load("images/dove32R2L.png")
doveR2LImageX = 780
doveR2LImageY = 480
doveR2LImageX_change = 0.3
doveR2LImageY_change = 0

# Dove right to left image
doveL2RImage = pygame.image.load("images/dove32L2R.png")
doveL2RImageX = 0
doveL2RImageY = 210
doveL2RImageX_change = 0.2
doveL2RImageY_change = 0.5


def doveTravel(x, y, bird):
    screen.blit(bird, (x, y))


aimImage = pygame.image.load("images/aim32.png")


def displayTargetAtMouseCursor():
    screen.blit(aimImage, pygame.mouse.get_pos())
    pygame.mouse.set_visible(False)


def isCollision(birdX, birdY, bulletX, bulletY):
    distance = math.sqrt((math.pow(birdX - bulletX, 2)) + (math.pow(birdY - bulletY, 2)))
    if distance < 17:
        return True
    else:
        return False


# Running the game window
done = False

bulletSound = mixer.Sound('sounds/bullet_fire.wav')


def fireTheBullet():
    bulletSound.play()


while not done:
    screen.blit(backgroundImage, (0, 0))

    if doveR2LImageX <= 0:
        doveR2LImageX = 780
    doveR2LImageX -= doveR2LImageX_change
    doveTravel(doveR2LImageX, 180, doveR2LImage)

    if doveL2RImageX >= 780:
        doveL2RImageX = 0
    doveL2RImageX += doveL2RImageX_change
    doveTravel(doveL2RImageX, 210, doveL2RImage)

    for event in pygame.event.get():
        collidedL2R = False
        if event.type == pygame.QUIT:
            done = True
        elif event.type == pygame.MOUSEBUTTONDOWN:
            fireTheBullet()
            x, y = map(float, pygame.mouse.get_pos())
            collidedR2L = isCollision(doveR2LImageX, 180, x, y)
            collidedL2R = isCollision(doveL2RImageX, 210, x, y)
#            print("DEAD? ",  collidedR2L)
#            print("DEAD? ", collidedL2R)

        if collidedL2R:
            doveL2RImageY -= doveL2RImageY_change
            print(doveL2RImageY)
            doveTravel(doveL2RImageX, doveL2RImageY, doveL2RImage)

    displayTargetAtMouseCursor()
    # To display the background image and screen update
    pygame.display.flip()
