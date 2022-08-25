require 'faker'
puts 'Seeding Data...'


u1 = User.create(
    username: 'kingshady42', 
    password: 'IdkTbh42@', 
    password_confirmation: 'IdkTbh42@',
    profile_image: 'kunj.png',
    bio: "5'6 and proud of it!",
    first_name: 'Kunj',
    last_name: 'Shah',
    email: 'shahkunj42@gmail.com'
)

u2 = User.create(
    username: 'jamiebenjam', 
    password: 'Flatiron420!', 
    password_confirmation: 'Flatiron420!',
    profile_image: '.png',
    bio: "5'6 and ashamed of it!",
    first_name: 'Jamie',
    last_name: 'Benjamin',
    email: 'jamiebenjamin@gmail.com'
)

u3 = User.create(
    username: 'mpg', 
    password: 'Passw0rd!', 
    password_confirmation: 'Passw0rd!',
    profile_image: 'marcus.png',
    bio: "Flation Fullstack Developer",
    first_name: 'Marcus',
    last_name: 'Parker-Garruba',
    email: '35mpg@gmail.com'
)

u4 = User.create(
    username: 'sleepymcgee', 
    password: 'Bl@z3it420', 
    password_confirmation: 'Bl@z3it420',
    profile_image: 'adriana.png',
    bio: "Tired but functioning",
    first_name: 'Adriana',
    last_name: 'Mcgee',
    email: 'adrianamcgee@gmail.com'
)

20.times do
    Cheep.create(
        cheep: Faker::Quote.yoda,
        likers_count: 0,
        user_id: rand(1..4)
    )
end 

u1.follow!(u2)
u1.follow!(u3)
u1.follow!(u4)
u2.follow!(u1)
u2.follow!(u3)
u2.follow!(u4)
u3.follow!(u1)
u3.follow!(u2)
u3.follow!(u4)
u4.follow!(u1)
u4.follow!(u2)
u4.follow!(u3)

puts 'SuccSEEDed'