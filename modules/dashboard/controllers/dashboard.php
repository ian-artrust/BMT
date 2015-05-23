<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Dashboard extends IAN_Controller {

	function __construct(){
		parent::__construct();
		if($this->session->userdata('logged_in') != TRUE ){
            $this->session->set_flashdata('notif','LOGIN GAGAL USERNAME ATAU PASSWORD ANDA SALAH !');
           redirect('welcome', 'refresh');
        }
	}

	public function index(){
		$this->load->view('dashboard');
	}
}