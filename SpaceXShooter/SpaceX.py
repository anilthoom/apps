import pygame

pygame.init()

screen = pygame.display.set_mode((800, 600))

pygame.display.set_caption("SpaceX Fight!!")
pygame.display.set_icon(pygame.image.load('ufo.png'))

playerImg = pygame.image.load('player.png')
playerX = 370
playerY = 480


def player(x, y):
    # Drawing image
    screen.blit(playerImg, (x, y))


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
                playerX -= 0.1
            if event.key == pygame.K_LEFT:
                playerX += 0.1


    player(playerX, playerY)
    pygame.display.update()
