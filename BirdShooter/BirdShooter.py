import pygame
import random

pygame.init()

screen = pygame.display.set_mode((800, 600))
backgroundImage = pygame.image.load("images/background.jpg")

# Dove right to left image
doveR2LImage = pygame.image.load("images/dove32R2L.png")
doveR2LImageX = 780
doveR2LImageY = 480
doveR2LImageX_change = 0.3
doveR2LImageY_change = 0


def doveR2LTravel(x, y):
    screen.blit(doveR2LImage, (x, y))


running = True
while running:
    screen.blit(backgroundImage, (0, 0))

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    if doveR2LImageX <= 0:
        doveR2LImageX = 780
    doveR2LImageX -= doveR2LImageX_change

    doveR2LTravel(doveR2LImageX, 180)

    # To display the background image and screen update
    pygame.display.update()
