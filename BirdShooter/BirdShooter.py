import pygame
import random

pygame.init()

screen = pygame.display.set_mode((800, 600))
backgroundImage = pygame.image.load("images/background.jpg")

# Enemy Image
doveR2LImage = []
doveR2LImageX = []
doveR2LImageY = []
doveR2LImageX_change = []
doveR2LImageY_change = []
num_of_enemies = 1

for i in range(num_of_enemies):
    doveR2LImage.append(pygame.image.load('images/dove32R2L.png'))
    doveR2LImageX.append(random.randint(0, 735))
    doveR2LImageY.append(random.randint(50, 150))
    doveR2LImageX_change.append(2)
    doveR2LImageY_change.append(40)

# Dove right to left image
def doveR2LTravel(x, y, i):
    screen.blit(doveR2LImage[i], (x, y))


running = True
while running:
    screen.blit(backgroundImage, (0, 0))
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        # Enemy movement
    for i in range(num_of_enemies):
        doveR2LImageX[i] += doveR2LImageX_change[i]
        if doveR2LImageX[i] <= 0:
            doveR2LImageX_change[i] = 0.01
            doveR2LImageY[i] += doveR2LImageY_change[i]
        elif doveR2LImageX[i] >= 736:
            doveR2LImageX_change[i] = -0.01
            doveR2LImageY[i] += doveR2LImageY_change[i]

        doveR2LImageX[i] = random.randint(0, 735)
        doveR2LImageY[i] = random.randint(50, 150)
        doveR2LTravel(doveR2LImageX[i], doveR2LImageY[i], i)
    # To display the background image and screen update
    pygame.display.update()
