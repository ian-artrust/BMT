<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by Ardian Webi Kirda
|---------------------------------
*/
class C_datakaryawan extends IAN_Controller{

	var $image_path;
	var $image_url;

	public function __construct(){
		parent::__construct();
		$this->load->model('datakaryawan/m_datakaryawan');
		$this->image_path   = 'images';
        $this->image_url    = base_url().'images/';
	}

	public function getDataKaryawan(){
        $start      = ($this->input->post('start', TRUE) ? $this->input->post('start', TRUE) : 0);
        $limit      = ($this->input->post('limit', TRUE) ? $this->input->post('limit', TRUE) : 20);
		
		$result 		= $this->m_datakaryawan->getGridDataKaryawan($start, $limit);
		$resultCount 	= $this->m_datakaryawan->countGridDataKaryawan();
		$count 			= $resultCount->num_rows();

		foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'nama_lengkap'		=> $value->nama_lengkap,
				'nik'				=> $value->nik,
				'id_jobname' 		=> $value->id_jobname,
				'jobname' 			=> $value->jobname,
				'no_ktp' 			=> $value->no_ktp,
				'card_id'			=> $value->card_id,
				'no_tlp1' 			=> $value->no_tlp1,
				'no_tlp2' 			=> $value->no_tlp2,
				'alamat' 			=> $value->alamat,
				'tgl_lahir' 		=> $value->tgl_lahir,
				'tmp_lahir' 		=> $value->tmp_lahir,
				'zip' 				=> $value->zip,
				'email' 			=> $value->email,
				'active' 			=> $value->active,
				'userfile' 			=> base_url().'images/'.$value->userfile
			);
		}

		$data['total'] 		= $count;
		$data['success']	= true;
		echo json_encode($data);
	}

	public function delDataKaryawan(){
		$data = json_decode($this->input->post('post'));
		foreach ($data as $row) {
			$picfile = $this->m_datakaryawan->getID($row->id)->userfile;
			$path = FCPATH.'images'.DIRECTORY_SEPARATOR.$picfile;
			$this->m_datakaryawan->deleteDataKaryawan($row->id);
			unlink($path);
		}
		echo json_encode($data);
	}

	public function saveDataKaryawan(){
		$config = array(
	      'allowed_types' => 'jpg|png|gif',
	      'upload_path'   => $this->image_path,
	      'max_size'      => '200',
	      'max_width'     => '1024',
	      'max_height'    => '768'
	    );
    
	    $this->load->library('upload', $config);
	    $this->upload->initialize($config);
	    $up = $this->upload->do_upload();
	    $userfile      = $this->input->post('photo');
	    if (!$up) {
	      $error    = array('error' => $this->upload->display_errors());
	      $msg 		= "Ukuran Gambar Maskimal 200Kb";
	    } else {
	        $upload_data    = $this->upload->data();
	        $userfile       = $upload_data['file_name'];
	        $data_ary = array(
	          'images'      => $upload_data['file_name'],
	          'post_date'   =>  date('d-m-Y H:i:s'),  
	        );
	    }

		$uuid         	 = $this->m_datakaryawan->getUUID();
		$nama_lengkap    = ($this->input->post('nama_lengkap', TRUE) ? $this->input->post('nama_lengkap', TRUE) : '');
		$nik		     = $this->m_datakaryawan->nik(3,"BDM");
		$id_jobname      = ($this->input->post('id_jobname', TRUE) ? $this->input->post('id_jobname', TRUE) : '');
		$card_id   		 = ($this->input->post('card_id', TRUE) ? $this->input->post('card_id', TRUE) : '');
		$no_ktp   		 = ($this->input->post('no_ktp', TRUE) ? $this->input->post('no_ktp', TRUE) : '');
		$no_tlp1  		 = ($this->input->post('no_tlp1', TRUE) ? $this->input->post('no_tlp1', TRUE) : '');
		$no_tlp2  		 = ($this->input->post('no_tlp2', TRUE) ? $this->input->post('no_tlp2', TRUE) : '');
		$tgl_lahir 	     = ($this->input->post('tgl_lahir', TRUE) ? $this->input->post('tgl_lahir', TRUE) : '');
		$tmp_lahir 	     = ($this->input->post('tmp_lahir', TRUE) ? $this->input->post('tmp_lahir', TRUE) : '');
		$zip 			 = ($this->input->post('zip', TRUE) ? $this->input->post('zip', TRUE) : '');
		$email  		 = ($this->input->post('email', TRUE) ? $this->input->post('email', TRUE) : '');
		$alamat   		 = ($this->input->post('alamat', TRUE) ? $this->input->post('alamat', TRUE) : '');
		$active 		 = ($this->input->post('active', TRUE) ? $this->input->post('active', TRUE) : '');

    	if($active == TRUE) { 
    		$active = 'Y'; 
    	} else { 
    		$active = 'N'; 
    	}

    	if(empty($nik)){
    		$success 	= 3;
    		$msg 		= "Data Tidak Boleh Kosong";
    	} elseif($this->m_datakaryawan->cekData($nik) == 0){
    		$this->m_datakaryawan->saveDataKaryawan($uuid, $nama_lengkap, $nik, $id_jobname, $card_id, $no_ktp, $no_tlp1, $no_tlp2, $tgl_lahir, $tmp_lahir, $zip, $email, $alamat, $active, $userfile);
    		$success 	= 1;
    		$msg 		= "Data Berhasil Disimpan";
    	} else {
    		$success 	= 2;
    		$msg 		= "Error Please Contact Your Vendor";
    	}

    	$data['total'] 		= $success;
    	$data['success'] 	= TRUE;
    	$data['msg']		= $msg;
    	echo json_encode($data);    	
	}

	public function editDataKaryawan(){
		$config = array(
	      'allowed_types' => 'jpg|png|gif',
	      'upload_path'   => $this->image_path,
	      'max_size'      => '200',
	      'max_width'     => '1024',
	      'max_height'    => '768'
		 );
		    
		  $this->load->library('upload', $config);
		  $this->upload->initialize($config);
		  $userfile     ='noimage.jpg';
		  if (!($this->upload->do_upload())) {
		    $error = array('error' => $this->upload->display_errors());
		    $msg = "Periksa Kembali Ukuran Gambar";
		  } else {
		      $upload_data = $this->upload->data();
		      $userfile     = $upload_data['file_name'];
		      $data_ary = array(
		        'images'      => $upload_data['file_name'],
		        'post_date'   =>  date('d-m-Y H:i:s'),  
		      );
		  }

		$id 			 = ($this->input->post('id', TRUE) ? $this->input->post('id', TRUE) : '');
		$nama_lengkap    = ($this->input->post('nama_lengkap', TRUE) ? $this->input->post('nama_lengkap', TRUE) : '');
		$id_jobname      = ($this->input->post('id_jobname', TRUE) ? $this->input->post('id_jobname', TRUE) : '');
		$card_id   		 = ($this->input->post('card_id', TRUE) ? $this->input->post('card_id', TRUE) : '');
		$no_ktp   		 = ($this->input->post('no_ktp', TRUE) ? $this->input->post('no_ktp', TRUE) : '');
		$no_tlp1  		 = ($this->input->post('no_tlp1', TRUE) ? $this->input->post('no_tlp1', TRUE) : '');
		$no_tlp2  		 = ($this->input->post('no_tlp2', TRUE) ? $this->input->post('no_tlp2', TRUE) : '');
		$tgl_lahir 	     = ($this->input->post('tgl_lahir', TRUE) ? $this->input->post('tgl_lahir', TRUE) : '');
		$tmp_lahir 	     = ($this->input->post('tmp_lahir', TRUE) ? $this->input->post('tmp_lahir', TRUE) : '');
		$zip 			 = ($this->input->post('zip', TRUE) ? $this->input->post('zip', TRUE) : '');
		$email  		 = ($this->input->post('email', TRUE) ? $this->input->post('email', TRUE) : '');
		$alamat   		 = ($this->input->post('alamat', TRUE) ? $this->input->post('alamat', TRUE) : '');
		$active 		 = ($this->input->post('active', TRUE) ? $this->input->post('active', TRUE) : '');
		if($active == TRUE) { 
    		$active = 'Y'; 
    	} else { 
    		$active = 'N'; 
    	}

    	if($userfile=="noimage.jpg"){
	      $this->m_datakaryawan->updateDataKaryawanWP($id, $nama_lengkap, $id_jobname, $card_id, $no_ktp, $no_tlp1, $no_tlp2, $tgl_lahir, $tmp_lahir, $zip, $email, $alamat, $active);
	      $success = "Data Berhasil Dirubah"; 
	    } else {
	      if(empty($nama_lengkap)){ 
	        $success = "Pengisian Data Salah"; 
	      } else if($this->m_datakaryawan->cekID($id) == 1){ 
	        $data       = ($this->input->post('id', TRUE) ? $this->input->post('id', TRUE) : '');
	        $picfile    = $this->m_datakaryawan->getID($data)->userfile;
	        $path       = FCPATH.'images'.DIRECTORY_SEPARATOR.$picfile;
	        unlink($path);
	        $this->m_datakaryawan->updateDataKaryawan($id, $nama_lengkap, $id_jobname, $card_id, $no_ktp, $no_tlp1, $no_tlp2, $tgl_lahir, $tmp_lahir, $zip, $email, $alamat, $active, $userfile);
	        $success = "Data Berhasil Dirubah"; 
	      } else { 
	        $success = "Pengisian Data Salah";  
	      }
	    }
	    $data = array('total'=>$success, 'success'=>TRUE);
	    echo json_encode($data); 

	}

	public function searchDataKaryawan(){
		$name 		= ($this->input->post('name', TRUE) ? $this->input->post('name', TRUE) : '');
    	$result 	= $this->m_datakaryawan->searchDataKaryawan($name);
    	foreach ($result->result() as $key => $value) {
			$data['data'][]=array(
				'id' 				=> $value->id,
				'nama_lengkap'		=> $value->nama_lengkap,
				'nik'				=> $value->nik,
				'id_jobname' 		=> $value->id_jobname,
				'jobname' 			=> $value->jobname,
				'no_ktp' 			=> $value->no_ktp,
				'card_id'			=> $value->card_id,
				'no_tlp1' 			=> $value->no_tlp1,
				'no_tlp2' 			=> $value->no_tlp2,
				'alamat' 			=> $value->alamat,
				'tgl_lahir' 		=> $value->tgl_lahir,
				'tmp_lahir' 		=> $value->tmp_lahir,
				'zip' 				=> $value->zip,
				'email' 			=> $value->email,
				'active' 			=> $value->active,
				'userfile' 			=> base_url().'images/'.$value->userfile
			);
		}
		$data['success']	= true;
		echo json_encode($data);
	}
}