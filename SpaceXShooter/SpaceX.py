import pygame
import random

pygame.init()

screen = pygame.display.set_mode((800, 600))

pygame.display.set_caption("SpaceX Fight!!")
pygame.display.set_icon(pygame.image.load('ufo.png'))

# Player Image
playerImg = pygame.image.load('player.png')
playerX = 370
playerY = 480
playerX_change = 0


def player(x, y):
    # Drawing image
    screen.blit(playerImg, (x, y))


# Enemy Image
enemyImage = pygame.image.load('enemy.png')
enemyX = random.randint(0, 800)
enemyY = random.randint(50, 150)
enemyX_change = 0.3
enemyY_change = 0


def enemy(x, y):
    screen.blit(enemyImage, (x, y))


# Game loop
running = True
while running:
    # RGB color values
    screen.fill((0, 0, 0))

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

        # key strokes logic
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_LEFT:
                playerX_change = -0.1
            if event.key == pygame.K_RIGHT:
                playerX_change = 0.1
        if event.type == pygame.KEYUP:
            if event.key == pygame.K_LEFT or event.key == pygame.K_RIGHT:
                playerX_change = 0

    playerX += playerX_change

    # Control the player not to be out of screen
    if playerX <= 0:
        playerX = 0
    elif playerX >= 736:
        playerX = 736

    # Enemy movement
    enemyX += enemyX_change
    if enemyX <= 0:
        enemyX_change = 0.3
    elif enemyX >= 736:
        enemyX_change = -0.3

    player(playerX, playerY)
    enemy(enemyX, enemyY)
    pygame.display.update()
