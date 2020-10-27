import pygame

pygame.init()

screen = pygame.display.set_mode((800, 600))

pygame.display.set_caption("SpaceX Fight!!")
pygame.display.set_icon(pygame.image.load('ufo.png'))

playerImg = pygame.image.load('player.png')
playerX = 370
playerY = 480

def player():
    screen.blit(playerImg, (playerX, playerY))

# Game loop
running = True
while running:
    # RGB color values
    screen.fill((0, 0, 0))

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    player()
    pygame.display.update()