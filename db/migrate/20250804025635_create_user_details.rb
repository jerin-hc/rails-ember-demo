class CreateUserDetails < ActiveRecord::Migration[8.0]
  def change
    create_table :user_details do |t|
      t.string :name
      t.integer :age

      t.timestamps
    end
  end
end
