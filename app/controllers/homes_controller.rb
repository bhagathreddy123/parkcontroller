class HomesController < ApplicationController
  def index
  end

  def about
  end

  def airbone
  end

  def ampli
  end

  def antenna
  end

  def antenna_control
  end

  def bit
  end

  def board
  end

  def career
  end

  def client
  end

  def combiner
  end

  def contact
    @contact = Contact.new
  end

  def post_contact
    @contact = Contact.new(contact_params)
    if @contact.save
      redirect_to post_contact_homes_path
    else
      render :contact
    end
  end

  def display
  end

  def document
  end

  def down
  end

  def engine_control
  end

  def faq
  end

  def feature_icons
  end

  def generator
  end

  def generator_control
  end

  def inserter
  end

  def loader
  end

  def low
  end

  def mil
  end

  def modulator
  end

  def partner
  end

  def pcm
  end

  def power_control
  end

  def privacy
  end

  def reader
  end

  def receiver
  end

  def recorder
  end

  def sdr
  end

  def service
  end

  def software
  end

  def system
  end

  def unit
  end

  def video
  end

  private

  def contact_params
    params.require(:contact).permit!
  end
end
