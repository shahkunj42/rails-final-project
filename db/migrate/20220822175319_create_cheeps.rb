class CreateCheeps < ActiveRecord::Migration[6.1]
  def change
    create_table :cheeps do |t|
      t.text :cheep
      t.integer :likes
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
