class Boards::ListsController < ApplicationController
  before_action :set_list, only: [:update, :destroy]

  # POST /boards/:board_id/lists
  def create
    @list = List.new(list_params.merge(board_id: params[:board_id]))
    @list.position ||= (List.where(board_id: params[:board_id]).maximum(:position) || 0) + 1000

    if @list.save
      render json: @list, include: :tasks, status: :created
    else
      render json: @list.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /boards/:board_id/lists/:id
  def update
    if @list.update(list_params)
      render json: @list, include: :tasks
    else
      render json: @list.errors, status: :unprocessable_entity
    end
  end

  # DELETE /boards/:board_id/lists/:id
  def destroy
    @list.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_list
      @list = List.where(board_id: params[:board_id]).find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def list_params
      params.fetch(:list, {}).permit(:name, :position)
    end
end
