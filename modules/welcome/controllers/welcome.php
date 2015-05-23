<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Welcome extends IAN_Controller {

	function __construct(){
		parent::__construct();
		$this->load->model('dashboard/user_model');
	}

	public function index(){
		$this->load->view('login');
	}

	function validasi(){
		$username 	= $this->input->post('username');
		$password 	= sha1($this->input->post('password'));

		$result 	= $this->user_model->validasi($username,$password);

		if($result){
			$sess_array = array();
			foreach ($result as $row) {
				$sess_array = array('logged_in'=>TRUE, 'id'=>$row->id_user, 'username'=>$row->username);
				$this->session->set_userdata($sess_array);
				redirect('dashboard/index', 'refresh');
			}
			return TRUE;
		} else {
			redirect('welcome', 'refresh');
			return FALSE;
		}
	}

	function logout(){
		$this->session->sess_destroy();
		redirect('welcome', 'refresh');
	}

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */