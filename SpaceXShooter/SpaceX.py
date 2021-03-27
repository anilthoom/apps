import pygame
import random
import math
from pygame import mixer

pygame.init()

screen = pygame.display.set_mode((800, 600))

# Background
background = pygame.image.load('images/3057162.jpg')

# Background sound
mixer.music.load('sounds/background.wav')
mixer.music.play(-1)

pygame.display.set_caption("SpaceX Fight!!")
pygame.display.set_icon(pygame.image.load('images/ufo.png'))

# Score
score = 0
total_bullets_used = 0
font = pygame.font.Font('freesansbold.ttf', 32)
textX = 10
testY = 10


def printScore(x, y):
    score_text = font.render('Score: ' + str(score) + '/' + str(total_bullets_used), True, (255, 255, 255))
    screen.blit(score_text, (x, y))


# Player Image
playerImg = pygame.image.load('images/player.png')
playerX = 370
playerY = 480
playerX_change = 0


def player(x, y):
    # Drawing image
    screen.blit(playerImg, (x, y))


# Enemy Image
enemyImage = []
enemyX = []
enemyY = []
enemyX_change = []
enemyY_change = []
num_of_enemies = 6

for i in range(num_of_enemies):
    enemyImage.append(pygame.image.load('images/enemy.png'))
    enemyX.append(random.randint(0, 735))
    enemyY.append(random.randint(50, 150))
    enemyX_change.append(2)
    enemyY_change.append(40)


def enemy(x, y, i):
    screen.blit(enemyImage[i], (x, y))


# Bullet Image
bulletImage = pygame.image.load('images/bullet.png')
bulletX = 0
bulletY = 480
bulletX_change = 0
bulletY_change = 10
# ready state - not visible on the screen
# fire state - bullet is visible and moving
bullet_state = "ready"

# Loading bullet fire image
bulletSound = mixer.Sound('sounds/laser.wav')


def fire_bullet(x, y):
    global bullet_state
    bullet_state = "fire"
    screen.blit(bulletImage, (x + 16, y + 10))
    bulletSound.play()


def isCollision(enemyX, enemyY, bulletX, bulletY):
    distance = math.sqrt((math.pow(enemyX - bulletX, 2)) + (math.pow(enemyY - bulletY, 2)))
    if distance < 27:
        return True
    else:
        return False


gameOverFont = pygame.font.Font('freesansbold.ttf', 70)


def gameOverText():
    game_over_text = gameOverFont.render('Game Over', True, (255, 0, 0))
    screen.blit(game_over_text, (200, 250))


# Game loop
running = True
while running:
    # RGB color values
    screen.fill((0, 0, 0))
    # Background image
    screen.blit(background, (0, 0))

    # Close button click
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

        # key strokes logic
        if event.type == pygame.KEYDOWN:
            # Player movement to left
            if event.key == pygame.K_LEFT:
                playerX_change = -5
            # Player movement to right
            if event.key == pygame.K_RIGHT:
                playerX_change = 5
            # Firing bullets
            if event.key == pygame.K_SPACE:
                if bullet_state == "ready":
                    bulletX = playerX
                    fire_bullet(bulletX, bulletY)
                    total_bullets_used += 1
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
    for i in range(num_of_enemies):
        # IF Game over
        if enemyY[i] > 440:
            for j in range(num_of_enemies):
                enemyY[j] = 4000
            gameOverText()
            break

        enemyX[i] += enemyX_change[i]
        if enemyX[i] <= 0:
            enemyX_change[i] = 3
            enemyY[i] += enemyY_change[i]
        elif enemyX[i] >= 736:
            enemyX_change[i] = -3
            enemyY[i] += enemyY_change[i]

        # Collision check
        collision = isCollision(enemyX[i], enemyY[i], bulletX, bulletY)
        if collision:
            # Loading bullet fire image
            explosion_sound = mixer.Sound('sounds/explosion.wav')
            explosion_sound.play()
            bulletY = 480
            bullet_state = "ready"
            score += 1
            enemyX[i] = random.randint(0, 735)
            enemyY[i] = random.randint(50, 150)
        enemy(enemyX[i], enemyY[i], i)
    # Bullet movement
    if bulletY <= 0:
        bulletY = 480
        bullet_state = "ready"
    if bullet_state == "fire":
        fire_bullet(bulletX, bulletY)
        bulletY -= bulletY_change

    player(playerX, playerY)
    printScore(textX, testY)
    pygame.display.update()
print("Thanks for playing")









































