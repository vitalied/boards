class Boards::Lists::TasksController < ApplicationController
  before_action :set_task, only: [:show, :update, :destroy]

  # POST /boards/:board_id/lists/:list_id/tasks
  def create
    @task = Task.new(task_params.merge(list_id: params[:list_id]))
    @task.position ||= (Task.where(list_id: params[:list_id]).maximum(:position) || 0) + 1000

    if @task.save
      render json: @task, status: :created
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /boards/:board_id/lists/:list_id/tasks/:id
  def update
    if @task.update(task_params)
      render json: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /boards/:board_id/lists/:list_id/tasks/:id
  def destroy
    @task.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.where(list_id: params[:list_id]).find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def task_params
      params.fetch(:task, {}).permit(:list_id, :name, :position)
    end
end
