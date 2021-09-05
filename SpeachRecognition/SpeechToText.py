import speech_recognition as sr
import pyttsx3


# Initialize the recognizer
r = sr.Recognizer()


# Function to convert text to speech
def SpeakText(command):
    # Initialize the engine
    engine = pyttsx3.init()
    engine.say(command)
    engine.runAndWait()


# SpeakText("Hello Anil")
with sr.Microphone() as source2:
    # Wait for a second to let the recognizer
    # adjust the energy threshold based on the surrounding noise level
    print("Silence please, calibrating background noise")
    r.adjust_for_ambient_noise(source2, duration=2)
    print("Calibrated! Now speak...")

    # Listen for the user input
    audio2 = r.listen(source2)

    # Using google to recognize the audio
    MyText = r.recognize_google(audio2)
    MyText = MyText.lower()

    print(MyText)
    SpeakText(MyText)
