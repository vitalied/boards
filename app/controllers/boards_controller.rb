class BoardsController < ApplicationController
  before_action :set_board, only: [:update, :destroy]
  before_action :set_board_with_chields, only: [:show]

  # GET /boards
  def index
    @boards = Board.all

    render json: @boards
  end

  # GET /boards/:id
  def show
    render json: @board, include: :lists
  end

  # POST /boards
  def create
    @board = Board.new(board_params)

    if @board.save
      render json: @board, status: :created, location: @board
    else
      render json: @board.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /boards/:id
  def update
    if @board.update(board_params)
      render json: @board
    else
      render json: @board.errors, status: :unprocessable_entity
    end
  end

  # DELETE /boards/:id
  def destroy
    @board.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_board
      @board = Board.find(params[:id])
    end

    def set_board_with_chields
      @board = Board.includes(:lists).find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def board_params
      params.fetch(:board, {}).permit(:name)
    end
end
