import React from 'react';
import joy from '../Images/joy.jpeg';
import calm from '../Images/calm_relax.jpeg';
import motivational from '../Images/motivational.jpeg';
import energetic from '../Images/exploration.jpeg';
import reflective from '../Images/reflective.jpg_large';
import silly from '../Images/silly.jpeg';
const mood_list=[
    {
        "id": 1,
        'playlist_id': "54iUFD6rprvpoE3wVnSgU2",
        "title": "Joyful Vibes",
        "image": joy,
        "summary": "A lively and energetic mood with upbeat music playlists, inspirational quotes, and fun activities.",
        "steps_to_achieve": [
            "Engage in activities that bring you joy, such as dancing or spending time with loved ones.",
            "Listen to uplifting music that boosts your mood and energy levels.",
            "Surround yourself with positivity by seeking out inspirational quotes and affirmations.",
            "Practice gratitude to cultivate a mindset of appreciation and joy.",
            "Participate in fun activities that bring a smile to your face, like playing games or engaging in creative hobbies."
        ],
        "why_matters": "Joyful Vibes matter because they contribute to overall well-being and happiness. Experiencing joy enhances mood, increases energy levels, and fosters a positive outlook on life.",
        "quote": `The most wasted of all days is one without laughter.`,
        "quote_author": "E. E. Cummings"
    },
    {
        "id": 2,
        'playlist_id': "576cfnAEhdR7uhKeM1wwUE",
        "title": "Calm and Relaxation",
        "image": calm,
        "summary": "Featuring soothing music, calming quotes, and meditation resources to help users unwind and relax.",
        "steps_to_achieve": [
            "Practice deep breathing exercises to calm the mind and body.",
            "Listen to calming music or nature sounds to promote relaxation.",
            "Engage in meditation or mindfulness practices to reduce stress and anxiety.",
            "Surround yourself with peaceful environments and create a tranquil space at home.",
            "Take breaks throughout the day to rest and recharge, allowing for moments of calm and relaxation."
        ],
        "why_matters": "Calm and relaxation are essential for reducing stress, improving mental health, and enhancing overall well-being. Taking time to unwind promotes inner peace, restores balance, and increases resilience to life's challenges.",
        "quote": `Within you, there is a stillness and a sanctuary to which you can retreat at any time and be yourself.`,
        "quote_author": "Hermann Hesse"
    },
    {
        "id": 3,
        'playlist_id': "3ybnF1ZkG9Y2LZhr15eFQi",
        "title": "Motivational Boost",
        "image": motivational,
        "summary": "A lively and energetic mood with upbeat music playlists, inspirational quotes, and fun activities.",
        "steps_to_achieve": [
            "Set specific, achievable goals to provide direction and motivation.",
            "Surround yourself with motivational quotes, books, and stories of success.",
            "Visualize success and stay focused on the positive outcomes of your actions.",
            "Break tasks into manageable steps to avoid feeling overwhelmed and maintain momentum.",
            "Celebrate progress and acknowledge your achievements along the way to stay motivated."
        ],
        "why_matters": "Motivation is crucial for achieving goals, overcoming obstacles, and fulfilling potential. It provides the drive and determination needed to pursue dreams, accomplish tasks, and strive for success.",
        "quote": `Believe you can and you're halfway there.`,
        "quote_author": "Theodore Roosevelt"
    },
    {
        "id": 4,
        'playlist_id': "37i9dQZF1EIeEZPgsd7pko",
        "title": "Energetic Exploration",
        "image": energetic,
        "summary": "Encouraging exploration and adventure with lively music, adventurous quotes, and resources for staying active.",
        "steps_to_achieve": [
            "Engage in physical activities that energize and invigorate you, such as hiking or dancing.",
            "Listen to upbeat music that inspires movement and motivates action.",
            "Seek out adventurous experiences and embrace new challenges.",
            "Stay active and maintain a healthy lifestyle through regular exercise and outdoor activities.",
            "Surround yourself with positive and adventurous individuals who encourage exploration and growth."
        ],
        "why_matters": "Energetic exploration fuels curiosity, fosters personal growth, and adds excitement to life. It encourages individuals to step out of their comfort zones, embrace new experiences, and discover their full potential.",
        "quote": `The only way to do great work is to love what you do.`,
        "quote_author": "Steve Jobs"

    },
    {
        "id": 5,
        'playlist_id': "7EaeguQy78c57ZvlQSG7kX" ,
        "title": "Reflective Moments",
        "image": reflective,
        "summary": "Offering introspective music, thoughtful quotes, and meditation exercises for moments of self-reflection.",
        "steps_to_achieve": [
            "Set aside time for quiet reflection and introspection.",
            "Listen to reflective music or nature sounds to create a calming atmosphere.",
            "Engage in journaling or writing exercises to explore thoughts and emotions.",
            "Practice mindfulness and meditation to deepen self-awareness and insight.",
            "Contemplate meaningful questions and insights to gain clarity and perspective on life."
        ],
        "why_matters": "Reflective moments provide opportunities for self-discovery, growth, and inner transformation. By pausing to reflect on experiences and emotions, individuals can gain insight, cultivate wisdom, and make informed decisions that align with their values and aspirations.",
        "quote": `Knowing yourself is the beginning of all wisdom.`,
        "quote_author": "Aristotle"
    },
    {
        "id": 6,
        'playlist_id': "37i9dQZF1EIeNJxEHJdFNK" ,
        "title": "Playful and Silly",
        "image": silly,
        "summary": "Creating a light-hearted atmosphere with playful tunes, funny quotes, and entertaining activities.",
        "steps_to_achieve": [
            "Engage in activities that promote laughter and amusement, such as watching comedy shows or playing games.",
            "Listen to playful music or humorous podcasts to lift your spirits.",
            "Surround yourself with positive and playful individuals who share your sense of humor.",
            "Embrace spontaneity and let go of inhibitions to experience joy in everyday moments.",
            "Find creative outlets for self-expression and playfulness, such as art, dance, or storytelling."
        ],
        "why_matters": "Playfulness and silliness add joy, spontaneity, and humor to life. They promote laughter, strengthen social connections, and encourage individuals to embrace their inner child, fostering a sense of wonder and delight in the world.",
        "quote": `We don't stop playing because we grow old; we grow old because we stop playing.`,
        "quote_author": "George Bernard Shaw"
    }
];
export default mood_list;