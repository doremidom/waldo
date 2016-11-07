class CreateWinners < ActiveRecord::Migration[5.0]
  def change
    create_table :winners do |t|
    	t.string :name
    	t.time :start_time
    	t.time :stop_time

      	t.timestamps
    end
  end
end
