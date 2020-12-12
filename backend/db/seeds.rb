# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Faker::Music::Prince.lyric #=> "It's been 7 hours and 16 days since you took your love away."

# Faker::Music::Prince.song #=> "The Beautiful Ones"

# Faker::Music::Prince.album #=> "Purple Rain"

# Faker::Music::Prince.band #=> "The New Power Generation"

# Faker::Music.genre #=> "Rock"

vibe = ["chill", "uplifting", "nostalgic", "psychedelic", "happy", "sad", "romantic", "marley-esque"]

10.times do 

    Song.create(name: Faker::Music::Prince.song, genre: Faker::Music.genre, lyrics: Faker::Music::Prince.lyric, bpm: rand() * 100, vibe: vibe.sample)

end 

