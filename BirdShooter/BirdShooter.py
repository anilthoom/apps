import pygame

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
doveL2RImageY = 450
doveL2RImageX_change = 0.2
doveL2RImageY_change = 0


def doveTravel(x, y, bird):
    screen.blit(bird, (x, y))


aimImage = pygame.image.load("images/aim32.png")


def displayTargetAtMouseCursor():
    screen.blit(aimImage, pygame.mouse.get_pos())
    pygame.mouse.set_visible(False)


# Running the game window
done = False


def fireTheBullet():
    pygame.mouse.get_pos()


while not done:
    screen.blit(backgroundImage, (0, 0))

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            done = True
        elif event.type == pygame.MOUSEBUTTONDOWN:
            fireTheBullet()

    if doveR2LImageX <= 0:
        doveR2LImageX = 780
    doveR2LImageX -= doveR2LImageX_change
    doveTravel(doveR2LImageX, 180, doveR2LImage)

    if doveL2RImageX >= 780:
        doveL2RImageX = 0
    doveL2RImageX += doveL2RImageX_change
    doveTravel(doveL2RImageX, 210, doveL2RImage)

    displayTargetAtMouseCursor()
    # To display the background image and screen update
    pygame.display.flip()
