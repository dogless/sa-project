class MapController < ApplicationController
  def index
  end
  def show
	@marker1=params[:dest]
  end
end
