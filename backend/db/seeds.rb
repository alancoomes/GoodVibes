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
user = User.new(username: "alancoomes", name: "Alan Coomes", password: "JackJohnson")

    album_1 = Album.create(name: Faker::Music::Prince.album, genre: Faker::Music.genre, cover_art: "https://i.pinimg.com/originals/b4/75/00/b4750046d94fed05d00dd849aa5f0ab7.jpg", user: user)
    album_2 = Album.create(name: Faker::Music::Prince.album, genre: Faker::Music.genre, cover_art: "https://i2.wp.com/nyunews.com/wp-content/uploads/2019/10/CKF17E3UkAAl4km.jpg-large.jpeg?fit=1600%2C1600&ssl=1", user: user)
    album_3 = Album.create(name: Faker::Music::Prince.album, genre: Faker::Music.genre, cover_art: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sunset-retro-80%27s-cd-cover-art-template-design-2cc033e89001c5f3b65e3542cdb084de_screen.jpg?ts=1568024484", user: user)


10.times do 

    Song.create(name: Faker::Music::Prince.song, genre: Faker::Music.genre, lyrics: Faker::Music::Prince.lyric, bpm: rand() * 100, vibe: vibe.sample, album: [album_1, album_2, album_3].sample, user: user)
    
end 




