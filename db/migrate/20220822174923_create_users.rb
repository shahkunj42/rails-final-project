class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :profile_image
      t.text :bio
      t.string :first_name
      t.string :last_name

      t.timestamps
    end
  end
end
