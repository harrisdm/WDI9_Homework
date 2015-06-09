class SpiritsController < ApplicationController

  def index
    @spirits = Spirit.all
  end

  def new
  end

  def create
    Spirit.create(spirit_params)
    redirect_to spirits_path
  end

  def show
    @spirit = Spirit.find params[:id]
  end

  def edit
    @spirit = Spirit.find params[:id]
  end

  def update
    spirit = Spirit.find params[:id]
    spirit.update spirit_params
    redirect_to spirit_path
  end

  def delete
    spirit = Spirit.find params[:id]
    spirit.destroy
    redirect_to spirits_path
  end

  private
  def spirit_params
    params.require(:spirit).permit(:name, :variety, :origin, :price, :volume, :alcohol, :image, :description)
  end

end